var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast =  Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast");

app.MapGet("/api/products", () =>
{
    var products = new[]
    {
        new Product(1, "Laptop", "High-performance laptop", 999.99m, "Electronics"),
        new Product(2, "Mouse", "Wireless optical mouse", 29.99m, "Electronics"),
        new Product(3, "Keyboard", "Mechanical gaming keyboard", 149.99m, "Electronics"),
        new Product(4, "Monitor", "27-inch 4K display", 399.99m, "Electronics"),
        new Product(5, "Headphones", "Noise-cancelling wireless headphones", 199.99m, "Electronics")
    };
    return products;
})
.WithName("GetProducts");

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}

record Product(int Id, string Name, string Description, decimal Price, string Category);
