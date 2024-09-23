export async function picture() {
    const dateInput = document.querySelector('.container__input')
    const date = dateInput.value
    const apiKey = 'sIMOUEOoP9yumtkTILAgKlH73Q8eua3ZojZOX64K'
    const firstDate = new Date('1995-06-16')
    try{
        const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}${date?`&date=${date}`: ''}`
        const response = await fetch(url)
        const message = document.createElement('p')
        if(date < firstDate){
            message.textContent="Error: The selected date is before the first available date (June 16, 1995)."
            message.style.display='block'
            message.style.color='red'
        }else{
            message.textContent=''
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
                apodImage.style.padding='10px 10px'
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
    
        }
        }catch(error){
            console.error(error)
        }
        
}