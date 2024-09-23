export async function picture() {
    const dateInput = document.querySelector('.container__input')
    const date = dateInput.value
    const apiKey = 'sIMOUEOoP9yumtkTILAgKlH73Q8eua3ZojZOX64K'
    try{
        
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}${date?`&date=${date}`: ''}`)
        if(!response.ok){
            console.log('could not fetch')
            return 
        }
        const data = await response.json()
        console.log(data)
        if(data){
            const apodContainer = document.querySelector('.container__apod')
            apodContainer.innerHTML='';
            const apodTitle = document.createElement('h3')
            apodTitle.className='container__apod-title'
            apodTitle.textContent= data.title;
            apodContainer.appendChild(apodTitle);

            const apodImage = document.createElement('img');
            apodImage.src = data.url;
            apodImage.alt = "Astronomy Picture of the Day";
            apodImage.style.width='50%';
            apodImage.style.padding='5px 5px'
            apodContainer.appendChild(apodImage);

            const apodExp = document.createElement('p')
            apodExp.className='container__apod-text'
            const fullText = data.explanation
            const maxLength = 100;
            const truncate = fullText.length > maxLength ? `${fullText.substring(0,maxLength)}<br><span id="see-more">See More</span>` : fullText
            apodExp.innerHTML=`<strong>Explanation:</strong> ${truncate}`
            apodContainer.appendChild(apodExp)

            if(fullText.length > maxLength){
                const seeMore = document.getElementById('see-more')
                seeMore.addEventListener('click',(e)=>{
                    e.preventDefault()
                    apodExp.innerHTML=`<strong>Explanation:</strong> ${fullText}`
                })
            }
            apodContainer.appendChild(apodExp)
        }

    }catch(error){
        console.error(error)
    }
}