let Images = [
    "https://miro.medium.com/max/500/1*xDIevNE7HEMiJQVTYg0qDQ.png",
    "https://imgix.bustle.com/uploads/image/2019/12/18/5280138d-db83-4f46-9126-efc05f976730-office-olympics.png?w=800&fit=crop&crop=faces&auto=format%2Ccompress",
    "http://cdn.pastemagazine.com/www/articles/i-am-beyonce-always-my-motto-for-2015-2265897.png",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheoffice.fandom.com%2Fwiki%2FMichael_Scott&psig=AOvVaw2xSxbIIhsH3yvXSn6JY9ck&ust=1624704839583000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCMDg57DPsvECFQAAAAAdAAAAABAK",
    "https://img.buzzfeed.com/buzzfeed-static/static/2016-07/22/17/asset/buzzfeed-prod-fastlane03/sub-buzz-29333-1469221236-2.jpg?output-quality=auto&output-format=auto&downsize=640:*",
    "https://www.goalcast.com/wp-content/uploads/2020/04/The-Office-Quote.jpg"
];
const imgs = document.getElementsByTagName("img")
for (let i=0; i<imgs.length;i++){
    const randomImg = Math.floor(Math.random() * Images.length)
    imgs[i].src = Images[randomImg];
}

const headers = document.getElementsByTagName("h3");
for (let i=0; i<headers.length;i++){
    headers[i].innerText = "The office";
}