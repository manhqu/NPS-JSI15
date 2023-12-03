const view = {}

view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case `registerScreen`:
      document.getElementById("app").innerHTML = components.registerScreen;



      document.getElementById("redirect-to-login").addEventListener("click", () => {
        view.setActiveScreen("loginScreen");
      });


      const registerForm = document.getElementById("register-form");
      registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const data = {
          // lấy dữ liệu người dùng thông qua câu lệnh sau:
          firstName: registerForm.firstName.value.trim(),
          lastName: registerForm.lastName.value.trim(),
          email: registerForm.email.value.trim(),
          password: registerForm.password.value.trim(),
          confirmPassword: registerForm.confirmPassword.value.trim()
        }

        console.log(data); /// Kết quả là gì
        controller.register(data);

      })







      break;

    case `loginScreen`:
      document.getElementById("app").innerHTML = components.loginScreen;

      document.getElementById("redirect-to-register").addEventListener("click", () => {
        view.setActiveScreen("registerScreen");
      });


      const loginForm = document.getElementById("login-form")
      loginForm.addEventListener("submit", (event) => {
        event.preventDefault()

        const data = {
          email: loginForm.email.value.trim(),
          password: loginForm.password.value.trim(),
        }
        console.log(data);
        controller.login(data);
      })

      break;


    // document.getElementById("app").appendChild("manga-list")

    case `homeScreen`:
      document.getElementById("app").innerHTML = components.homeScreen;

      document.getElementById("screen").addEventListener("click", () => {
        view.setActiveScreen("loginScreen")

      });

      const manga_list = document.createElement("div");
      manga_list.id = "manga-list"
      console.log(manga_list)
      document.getElementById("app").appendChild(manga_list)


      console.log(manga);
      /// code thay Hieu

      function renderManga() {

        console.log("renderManga");
        const app = document.getElementById("app");

        manga.forEach(mangaItem => {

          const mangaDiv = document.createElement('div');
          mangaDiv.classList.add('mangas');

          const mangaName = document.createElement('h2');
          mangaName.textContent = mangaItem.name;

          const mangaImage = document.createElement('img');
          // mangaImage.src = mangaItem.imgaeRemotePath; // Chú ý chính tả
          mangaImage.alt = mangaItem.name;

          const mangaTitle = document.createElement('p');
          mangaTitle.textContent = mangaItem.title;

          // Hiển thị thể loại
          const mangaGenres = document.createElement('p');
          mangaGenres.textContent = `Genres: ${mangaItem.genres.join(', ')}`;

          // Hiển thị loại (type)
          if (mangaItem.type) {
            const mangaType = document.createElement('p');
            mangaType.textContent = `Type: ${mangaItem.type.join(', ')}`;
            mangaDiv.appendChild(mangaType);
          }

          mangaDiv.appendChild(mangaName);
          mangaDiv.appendChild(mangaImage);
          mangaDiv.appendChild(mangaTitle);
          mangaDiv.appendChild(mangaGenres);

          app.appendChild(mangaDiv);
        });
      }

      renderManga()







      document.getElementById("contact").addEventListener("click", () => {
        console.log("bạn đã bấm nút contact");
        view.setActiveScreen("contactScreen");

      });

      document.getElementById("about").addEventListener("click", () => {
        view.setActiveScreen("aboutScreen")
      })


      document.getElementById("home").addEventListener("click", () => {
        console.log("ban da bam nut home")
        view.setActiveScreen("homeScreen")

      });
      break;






    case `contactScreen`:
      document.getElementById("app").innerHTML = components.contactScreen;
      document.getElementById("about").addEventListener("click", () => {
        view.setActiveScreen("aboutScreen")
      })
      document.getElementById("home").addEventListener("click", () => {
        view.setActiveScreen("homeScreen")
      })
      break;




    case `aboutScreen`:
      document.getElementById("app").innerHTML = components.aboutScreen;
      document.getElementById("home").addEventListener("click", () => {
        view.setActiveScreen("homeScreen")
      })
      break;

  }

}



