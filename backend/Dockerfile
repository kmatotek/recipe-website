# Build stage
# need the dotnet sdk to actuallly compile everything
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /src

# Copy project file first
COPY BackendAPI.csproj .

# Restore dependencies
RUN dotnet restore

# Copy the rest of the source code
COPY . .

# Build and publish the application
RUN dotnet publish -c Release -o /app/publish


# Runtime stage
# want a more lightweight image for running, since we don't need the dontet sdk to compile everything.
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final

WORKDIR /app

# Copy the published application from the build stage
COPY --from=build /app/publish .

# ASP.NET Core will listen on port 8080
ENV ASPNETCORE_HTTP_PORTS=8080

EXPOSE 8080

ENTRYPOINT ["dotnet", "BackendAPI.dll"]