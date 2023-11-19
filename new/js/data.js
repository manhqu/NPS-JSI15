const manga = [
    {
        "name": "HORE-SHOU NO HALF ELF-SAN THE COMIC",
        "title": "HORE-SHOU NO HALF ELF-SAN THE COMIC",
        "imgaeRemotePath": "https://i7.bumcheo.info/manga/33/33354/hore-shou-no-half-elf-san-the-comic.thumb_300x300.jpg",
        "genres": ["romance"],



    },

    {
        "name": "NẤM VÀ SẮT [>DEBUT CHAP 1<]",
        "title": "Dante là một cậu nhóc không biết đọc, sinh ra và lớn lên trong một môi trường quân đội, nơi mọi phép tắc đều phải tuân theo luật lệ. Nhưng vì không biết đọc, nên thế giới đầy quy tắc này quá chật hẹp với cậu, cậu luôn mơ về thế giới phía sau bức tường. Và rồi cậu nhận được nhiệm vụ tác chiến bên ngoài bức tường, điều gì sẽ đón đợi cậu ở bên ngoài? CBC Gardenn - Team dịch truyện tranh",
        "imgaeRemotePath": "https://i7.bumcheo.info/manga/33/33370/kin2.thumb_300x300.jpg",
        "genres": ["romance"],



    },
    {



        "name": "BLUE LOCK  ",
        "title": "MANGA VỀ BÓNG ĐÁ ĐIÊN LOẠN VÀ HOT NHẤT HIỆN TẠI!",
        "imgaeRemotePath": "https://i7.bumcheo.info/manga/20/20796/0000.thumb_300x300.png",
        "genres": ["romance"],



    },
    {



        "name": "KONJIKI NO MOJI TSUKAI (WORD MASTER)",
        "title": "[>UPDATE CHAP 84<]",
        "imgaeRemotePath": "https://i7.bumcheo.info/manga/9/9312/konjikinowordmastervolume8cover.thumb_300x300.jpg",
        "genres": ["romance"],



    },
    {



        "name": "BLUE LOCK  ",
        "title": "MANGA VỀ BÓNG ĐÁ ĐIÊN LOẠN VÀ HOT NHẤT HIỆN TẠI!",
        "imgaeRemotePath": "https://i7.bumcheo.info/manga/20/20796/0000.thumb_300x300.png",
        "genres": ["romance"],



    },
    {



        "name": "BLUE LOCK  ",
        "title": "MANGA VỀ BÓNG ĐÁ ĐIÊN LOẠN VÀ HOT NHẤT HIỆN TẠI!",
        "imgaeRemotePath": "https://i7.bumcheo.info/manga/20/20796/0000.thumb_300x300.png",
        "genres": ["romance"],



    },
    {



        "name": "BLUE LOCK  ",
        "title": "MANGA VỀ BÓNG ĐÁ ĐIÊN LOẠN VÀ HOT NHẤT HIỆN TẠI!",
        "imgaeRemotePath": "https://i7.bumcheo.info/manga/20/20796/0000.thumb_300x300.png",
        "genres": ["romance"],



    },
    {



        "name": "BLUE LOCK  ",
        "title": "MANGA VỀ BÓNG ĐÁ ĐIÊN LOẠN VÀ HOT NHẤT HIỆN TẠI!",
        "imgaeRemotePath": "https://i7.bumcheo.info/manga/20/20796/0000.thumb_300x300.png",
        "genres": ["romance"],



    },
    {



        "name": "BLUE LOCK  ",
        "title": "MANGA VỀ BÓNG ĐÁ ĐIÊN LOẠN VÀ HOT NHẤT HIỆN TẠI!",
        "imgaeRemotePath": "https://i7.bumcheo.info/manga/20/20796/0000.thumb_300x300.png",
        "genres": ["romance"],



    },
]




function renderManga() {
    const mangalist = document.getElementById('manga-list')


    manga.forEach(manga => {

        const mangaDiv = document.createElement('div')
        mangaDiv.classList.add('mangas')

        const MangaName = document.createElement('h2')
        MangaName.textContent = manga.name;

        const mangaImage = document.createElement('img');
        mangaImage.src = manga.imgaeRemotePath;
        mangaImage.alt = manga.name;


        const mangatitle = document.createElement('p')
        mangatitle.textContent = `${manga.title}`;



        mangaDiv.appendChild(MangaName)
        mangaDiv.appendChild(mangaImage)
        mangaDiv.appendChild(mangatitle)


        mangalist.appendChild(mangaDiv)


    });
}

document.addEventListener('DOMContentLoaded', renderManga);





