const card = function (data) {
  return `
            <article class="card">

                <figure>
                    <img 
                        src="${data.imageUrl}" 
                        alt="${data.imageAlt}"
                    />
                </figure>
                <section>
                    <p>
                    ${data.content}
                    </p>
                </section>
            </article>
        
        `;
};

export default card;
