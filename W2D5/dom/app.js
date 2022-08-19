let weatherContainer = {
    sun: 'https://as1.ftcdn.net/v2/jpg/01/59/64/76/1000_F_159647671_elprHktHdHzUrmZr1dnN5fpeLxEDG35k.jpg',
    snow: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDi2Y1Rm-lUPjMC9UQuS-uIToHc6IMg-vszvwXInAU58asPghzFtNusqYrrVciQY6M_d0&usqp=CAU',
    rain: 'https://media.istockphoto.com/photos/rain-water-drop-falling-to-the-floor-in-rainy-season-picture-id522795232?k=20&m=522795232&s=612x612&w=0&h=8W7uSaNAKhFEpnnD5eYZEoANdjlueG79Lw9A-74ye8M=',
    cloud: 'https://static.vecteezy.com/system/resources/previews/002/182/167/large_2x/blue-sky-and-white-cloud-background-free-photo.jpg',
    city: 'https://w0.peakpx.com/wallpaper/903/210/HD-wallpaper-new-york-yankees-flag-mlb-blue-white-metal-background-american-baseball-team-new-york-yankees-logo-usa-baseball-new-york-yankees-golden-logo-ny-yankees.jpg'
}


const clickDrop = () => {
    let menu = document.querySelector('.cliqueContent')
    menu.classList.toggle('cliqueContent2')
}

const sun = () => {
    let target = document.querySelector('.topContainer')
    target.classList.toggle('sun')
}
const snow = () => {
    let target = document.querySelector('.topContainer')
    target.classList.toggle('snow')
}
const rain = () => {
    let target = document.querySelector('.topContainer')
    target.classList.toggle('rain')
}
const cloud = () => {
    let target = document.querySelector('.topContainer')
    target.classList.toggle('cloud')
}
const city = () => {
    let target = document.querySelector('.topContainer')
    target.classList.toggle('city')
}