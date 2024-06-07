using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[Authorize]
public class UsersController : BaseApiController
{
    private readonly DataContext context;

    public UsersController(DataContext context)
    {
        this.context = context;
    }

    [AllowAnonymous]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
    {
        return await context.Users.ToListAsync();
    }

    [HttpGet("{Id}")]
    public async Task<ActionResult<AppUser>> GetUser(int Id)
    {
        return await context.Users.FindAsync(Id);
    }
}

