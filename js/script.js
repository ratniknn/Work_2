/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". 
Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const promoRemove = document.querySelector('.promo__adv'),
          genre = document.querySelector('.promo__genre'),
          photo = document.querySelector('.promo__bg'),
          movielist = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (events) => {
        events.preventDefault();
    
        let newFilm = addInput.value;
        const favorite = checkbox.checked;
            if (newFilm){

                if(newFilm.length>21){
                    newFilm = `${newFilm.substring(0,22)}...`;
                }

                if(favorite) {
                    console.log("добавляем любимый фильм");
                }
                movieDB.movies.push(newFilm);
                sortArr(movieDB.movies);

                createMovieList(movieDB.movies, movielist);
            }
        events.target.reset();

    })

    const addNewFilm = function() {
        if (input.adding__input.value !=""){
            let a = input.adding__input.textContent;
            let i = movieDB.movies.length
            movieDB.movies[i+1] = a; 
        };
    };
    
    const sortArr = (arr) => {
        arr.sort();
    };

    

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
                </li>
             `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);

            createMovieList(films, parent);
            });
        });
    }

    promoRemove.remove();
    createMovieList(movieDB.movies, movielist);
    
})