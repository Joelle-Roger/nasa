export async function picture() {
    const dateInput = document.querySelector('.container__input')
    const date = dateInput.value
    const apiKey = 'sIMOUEOoP9yumtkTILAgKlH73Q8eua3ZojZOX64K'
    const firstDate = new Date('1995-06-16')
    const message = document.createElement('div')
    const apodContainer = document.querySelector('.container__apod')
    apodContainer.innerHTML='';
    message.textContent=''

    const inputDate = new Date(date);
    message.className='container__apod-error'
    
    if (inputDate < firstDate) {
        message.textContent = `Error:The selected date is before the first available date (June 16, 1995).`
        message.style.color = 'red';
        apodContainer.appendChild(message);
        return;
    }
    try{
        const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}${date?`&date=${date}`: ''}`
        const response = await fetch(url)
        
            if(!response.ok){
               console.log('could not fetch')
                return;
            }
            const data = await response.json()
            console.log(data)
            if(data){
                const apodTitle = document.createElement('h3')
                apodTitle.className='container__apod-title'
                apodTitle.textContent= data.title;
                apodContainer.appendChild(apodTitle);

                const apodContent = document.createElement('div');
                apodContent.className = 'container__apod-content'
    
                const apodImage = document.createElement('img');
                apodImage.src = data.url;
                apodImage.alt = "Astronomy Picture of the Day";
                apodImage.style.width='70%';
                apodImage.className='container__apod-picture'
                
    
                const apodExp = document.createElement('p')
                apodExp.className='container__apod-text'
                const fullText = data.explanation
                const maxLength = 100;
                const truncate = fullText.length > maxLength ? `${fullText.substring(0,maxLength)}<br><span class="container__apod-seeMore">See More</span>` : fullText
                apodExp.innerHTML=`<strong>Explanation:</strong> ${truncate}`
                
                apodContent.appendChild(apodImage)
                apodContent.appendChild(apodExp)

                apodContainer.appendChild(apodContent)

    
                if(fullText.length > maxLength){
                    const seeMore = document.querySelector('.container__apod-seeMore')
                    seeMore.addEventListener('click',(e)=>{
                        e.preventDefault()
                        apodExp.innerHTML=`<strong>Explanation:</strong> ${fullText}`
                    })
                }
                
            }
    
        
        }catch(error){
            console.error(error)
        }
        
}