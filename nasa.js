export async function picture() {
    const dateInput = document.getElementById('date-input')
    const date = dateInput.value
    try{
        
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=sIMOUEOoP9yumtkTILAgKlH73Q8eua3ZojZOX64K${date?`&date=${date}`: ''}`)
        if(!response.ok){
            console.log('could not fetch')
            return
        }
        const data = await response.json()
        console.log(data)
        if(data){
            const apodContainer = document.getElementById('apod-container')
            apodContainer.innerHTML='';
            const apodTitle = document.createElement('h3')
            apodTitle.id='apod-title'
            apodTitle.textContent= data.title;
            apodContainer.appendChild(apodTitle);

            const apodImage = document.createElement('img');
            apodImage.src = data.url;
            apodImage.alt = "Astronomy Picture of the Day";
            apodImage.style.width='100%';
            apodContainer.appendChild(apodImage);

            const apodExp = document.createElement('p')
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