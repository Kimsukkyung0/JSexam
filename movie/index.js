
(function(){
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzJjNmIwYjlhYWQxMzEyYzlkYWY3MmZmZWYzYmM3MiIsInN1YiI6IjYxZmNlOGY3N2E5N2FiMDA0N2U2ZTMzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Skjv6dYxa7qjdxWSz1tJVMH151T2WMNp4pzuursIeYw';
    const url='https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=';
    const posterPrefix= 'https://image.tmdb.org/t/p/w300/';
    let page=1;
    async function getMovieData(){
        const res = await fetch(url + page++,{
            headers:{
                Authorization:`Bearer ${accessToken}`,
                accept: 'application/json'
            }
        });
        const data = await res.json();
        console.log(data);
        if(data.length>0){
        makeList(data);
        }
    }
    getMovieData();
    function makeList(data){
        data.array.forEach(function(item) {
            const li = document.createElement('li');
            li.classList.add('listing-card__item');
            li.className = 'listing-card__item';
            
            return li;
        });
    }
})();
