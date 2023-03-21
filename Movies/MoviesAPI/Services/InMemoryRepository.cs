using MoviesAPI.Entities;

namespace MoviesAPI.Services;
public class InMemoryRepository : IRepository
{
    private List<Genre> _genres;
    public InMemoryRepository()
    {
        _genres = new List<Genre>()
        {
            new Genre() {Id = 1, Name = "Comedy"},
            new Genre() {Id = 2, Name = "Drama"}
        };
    }
 
    public async Task<List<Genre>> GetAllGenres()
    {
        await Task.Delay(2000);
        return _genres;
    }

    public async Task<Genre> GetGenreById(int Id)
    {
        return _genres.FirstOrDefault(x => x.Id == Id);
    }

    public void AddGenre(Genre genre)
    {
        genre.Id = _genres.Max(g => g.Id) + 1;
        _genres.Add(genre);
    }
}
