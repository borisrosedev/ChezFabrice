const card = function(data){

    return(
        `
            <article class="card">

                <figure>
                    <img 
                        src="${data.imageUrl}" 
                        alt="${data.imageAlt}"
                    />
                </figure>
                <p>
                    ${data.content}
                </p>
            </article>
        
        `
    )
}

export default card