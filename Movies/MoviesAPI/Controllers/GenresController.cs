using Microsoft.AspNetCore.Mvc;
using MoviesAPI.Entities;
using MoviesAPI.Services;
using Microsoft.Extensions.Logging;

namespace MoviesAPI.Controllers;

[ApiController]
[Route("api/genres")]
public class GenresController : ControllerBase
{
    private readonly IRepository repository;
    private readonly ILogger<GenresController> logger;

    public GenresController(IRepository _repository, ILogger<GenresController> _logger)
    {
        logger = _logger;
        repository = _repository;
    }

    [HttpGet] // api/genres
    [HttpGet("/getallgenres")]
    public async Task<ActionResult<List<Genre>>> Get()
    {
        return await repository.GetAllGenres();
    }

    [HttpGet("{Id:int}")] // api/genres/{Id}   1 or 2 or ... etc
    public async Task<ActionResult<Genre>> GetById([FromRoute] int Id)
    {
        logger.LogInformation("in process...");

        Genre genre = await repository.GetGenreById(Id);

        if (genre == null)
        {
            logger.LogError("genre with this id does not exist");
            return NotFound();
        }

        return genre;
    }

    [HttpPost]
    public ActionResult<string> Post([FromBody] Genre genre)
    {
        repository.AddGenre(genre);
        return NoContent();
    }
    
    [HttpPut]
    public ActionResult Put([FromBody] Genre genre)
    {
        return NoContent();
    }
    
    [HttpDelete]
    public ActionResult Delete()
    {
        return NoContent();
    }
}