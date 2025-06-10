document.addEventListener('DOMContentLoaded', function() {
    // Dados completos para 20 vídeos em cada tópico
    const topics = {
        music: {
            swiperClass: 'musicSwiper',
            title: 'Música',
            videos: [
                { 
                    id: 'dT2owtxkU8k',
                    title: 'Música Relaxante Oficial',
                    embedUrl: 'https://www.youtube.com/embed/dT2owtxkU8k?si=tFp3oHtOmYVDjclx'
                },
                { 
                    id: 'kJQP7kiw5Fk', 
                    title: 'Despacito', 
                    thumbnail: 'https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg',
                    link: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk'
                },
                { 
                    id: 'JGwWNGJdvx8', 
                    title: 'Shape of You', 
                    thumbnail: 'https://img.youtube.com/vi/JGwWNGJdvx8/maxresdefault.jpg',
                    link: 'https://www.youtube.com/watch?v=JGwWNGJdvx8'
                },
                { 
                    id: 'RgKAFK5djSk', 
                    title: 'See You Again', 
                    thumbnail: 'https://img.youtube.com/vi/RgKAFK5djSk/maxresdefault.jpg',
                    link: 'https://www.youtube.com/watch?v=RgKAFK5djSk'
                },
                { 
                    id: 'OPf0YbXqDm0', 
                    title: 'Uptown Funk', 
                    thumbnail: 'https://img.youtube.com/vi/OPf0YbXqDm0/maxresdefault.jpg',
                    link: 'https://www.youtube.com/watch?v=OPf0YbXqDm0'
                },
                // Adicione mais 15 vídeos de música...
                { 
                    id: 'dQw4w9WgXcQ', 
                    title: 'Never Gonna Give You Up', 
                    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
                    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                }
            ]
        },
        tech: {
            swiperClass: 'techSwiper',
            title: 'Tecnologia',
            videos: [
                { 
                    id: 'm7rSmqBThCs', 
                    title: 'Últimas Inovações Tech', 
                    thumbnail: 'https://img.youtube.com/vi/m7rSmqBThCs/maxresdefault.jpg',
                    link: 'https://www.youtube.com/watch?v=m7rSmqBThCs'
                },
                { 
                    id: 'XWZNB6y8MqI', 
                    title: 'Inteligência Artificial', 
                    thumbnail: 'https://img.youtube.com/vi/XWZNB6y8MqI/maxresdefault.jpg',
                    link: 'https://www.youtube.com/watch?v=XWZNB6y8MqI'
                },
                // Adicione mais 18 vídeos de tecnologia...
            ]
        },
        games: {
            swiperClass: 'gamesSwiper',
            title: 'Games',
            videos: [
                { 
                    id: 'kXYiU_JCYtU', 
                    title: 'Gameplay Incrível', 
                    thumbnail: 'https://img.youtube.com/vi/kXYiU_JCYtU/maxresdefault.jpg',
                    link: 'https://www.youtube.com/watch?v=kXYiU_JCYtU'
                },
                // Adicione mais 19 vídeos de games...
            ]
        },
        education: {
            swiperClass: 'eduSwiper',
            title: 'Educação',
            videos: [
                { 
                    id: 'TvnYmWpD_T8', 
                    title: 'Aprendendo Matemática', 
                    thumbnail: 'https://img.youtube.com/vi/TvnYmWpD_T8/maxresdefault.jpg',
                    link: 'https://www.youtube.com/watch?v=TvnYmWpD_T8'
                },
                // Adicione mais 19 vídeos de educação...
            ]
        }
    };

    // Configuração comum para todos os carrosséis
    const swiperConfig = {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4 }
        }
    };

    // Inicializa todos os carrosséis
    Object.values(topics).forEach(topic => {
        // Inicializa o Swiper
        const swiper = new Swiper(`.${topic.swiperClass}`, swiperConfig);
        
        // Preenche com vídeos
        const wrapper = document.querySelector(`.${topic.swiperClass} .swiper-wrapper`);
        
        topic.videos.forEach(video => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.innerHTML = `
                <div class="video-card">
                    <a href="${video.link}" target="_blank" class="video-link">
                        <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
                        <div class="play-button">▶</div>
                    </a>
                    <h3>${video.title}</h3>
                </div>
            `;
            wrapper.appendChild(slide);
        });
        
        // Atualiza o carrossel
        swiper.update();
    });
});