import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFilmsSeen } from './middleware';
import MediaListEntry from './MediaListEntry';
import SortPicker from './SortPicker';

export default function FilmsSeen() {
  const filmsSeen = useSelector(store => store.blog.lists.filmsSeen);

  const [sort, setSort] = useState('favourite');

  function onChangeSort(sort) {
    setSort(sort);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFilmsSeen());
  }, []);

  const filmsSeenWithPosition = filmsSeen.map((film, index) => {
    film.position = index + 1;
    return film;
  });

  return (
    <div>
      <h1 style={{ paddingLeft: '20px' }}>Films I've Seen</h1>
      <SortPicker
        selectedChoice={sort}
        onChangeSort={onChangeSort}
      />
      {
        filmsSeen.length === 0 && <div style={{ padding: '20px' }}>Loading...</div>
      }
      {
        filmsSeenWithPosition
            .sort((filmA, filmB) => {
              switch (sort) {
                case 'alphabetical':
                  return filmA.primary_title
                      .localeCompare(filmB.primary_title);
                case 'chronological':
                  return filmA.start_year - filmB.start_year;
                default:
                  // Favourite
                  return filmA.position - filmB.position;
              }
            })
            .map((film) => {
              return (
                <MediaListEntry
                  key={film.tconst}
                  details={film}
                  descriptionTexts={[
                    'Year: ' + film.start_year,

                    `Director${(film.directors.length > 1 ? 's' : '')}:${
                      film.directors
                          .map(director => '\n\t' + director).join(',')
                    }`,

                    `Writer${(film.writers.length > 1 ? 's' : '')}:${
                      film.writers
                          .map(writer => '\n\t' + writer).join(',')
                    }`,

                    `Genres:${
                      film.genres
                          .split(',')
                          .map(genre => ' ' + genre).join(',')
                    }`,

                    'Running Time: ' + film.runtime_minutes + ' minutes',
                  ]}
                />
              );
            })
      }
    </div>
  );
}
