
const url = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PLU7AGreFiX-E9cK4VNozzly9JAXI_tTPk&part=snippet&maxResults=50';


const content = null || document.getElementById("content");
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": 'd4f86974b8msh986c75ca9ebbef9p1bdb8fjsn59b2138f8c5c',
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(url) {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(url);
    console.log(videos);
    let view = `
        ${videos.items.map(
          (video) => `
        <div class="group  w-full">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src=${video.snippet.thumbnails.high.url} alt=${video.snippet.description} class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class=" inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
            `).join('')}
        `;
        content.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})();
