class Post {
  constructor(title, link, stocks, img) {
    this.title = title;
    this.link = link;
    this.stocks = stocks;
    this.img = img;
  }
}
const app = new Vue ({
    el: '#app',
    data: {
      keyword: 'javascript',
      postList: [
      new Post(
        'NKE',
        'nike.html',
        '$72.37 USD +0.17/(0.61%)',
        'https://i.imgur.com/OAm5XEC.png'
      ),
      new Post(
        'ADS',
        'addidas.html',
        '€193.85 EUR +0.50/(0.26%)',
        'https://s7.postimg.cc/zemujzezv/addidas-logo.png'
      ),
      new Post(
        'NASDAQ',
        'nasdaq.html',
        '$7,433.85 USD +9.42/(0.13%)',
        'https://www.seeklogo.net/wp-content/uploads/2016/11/nasdaq-logo-preview-400x400.png'
      ),
      new Post(
        'MSFT',
        'microsoft.html',
        '$98.36 USD  +0.050/(0.051%)',
        'http://www.pngmart.com/files/4/Microsoft-Logo-PNG-Transparent-Image.png'
      ),
      new Post(
        'AAPL',
        'apple.html',
        '188.58 USD  +0.43/(0.23%)',
        'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
      ),



]
}
});
