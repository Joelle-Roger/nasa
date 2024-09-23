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
                const truncate = fullText.length > maxLength ? `${fullText.substring(0,maxLength)}<br><span class="container__apod-seeMore">See More</span>` : fullText
                apodExp.innerHTML=`<strong>Explanation:</strong> ${truncate}`
                apodContainer.appendChild(apodExp)
    
                if(fullText.length > maxLength){
                    const seeMore = document.querySelector('.container__apod-seeMore')
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