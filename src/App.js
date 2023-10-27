
import './App.css';
import CenteredBar from './Components/CenteredBar';
import Header from './Components/Header';
import FeaturedArticle from './Components/FeaturedAricle';
import FeaturedTutorial from './Components/FeaturedTutorial';
import Mail from './Components/mail';
import About from './Components/about';


function App() {
  const imageUrls = [
    'https://webneel.com/wallpaper/sites/default/files/images/07-2013/5%20lamborghini%20gallardo%20car%20wallpaper.jpg',
    'https://wallpaperaccess.com/full/297903.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAT0a2ZHLTsg3AkzPrmFZ8JlZR1nZif0N0g&usqp=CAU'
  ];
  const titles = ['FLAT AURA', 'LOW SWIFT', 'MUST-HANG'];
  const descriptions = [
    'Beautiful orange car',
    'White horse',
    'Black must hang out later '
  ];
  const authors = ['By prabh', 'By sammy', 'By rishi'];
  const ratings = [4.5, 3.8, 5.0];

  const imageUrl = [
    'https://webneel.com/wallpaper/sites/default/files/images/07-2013/5%20lamborghini%20gallardo%20car%20wallpaper.jpg',
    'https://wallpaperaccess.com/full/297903.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAT0a2ZHLTsg3AkzPrmFZ8JlZR1nZif0N0g&usqp=CAU'
  ];
  const title = ['Orange STUTUTu', 'WHITE GTR', 'DOM TORETO '];
  const description = [
    'Fastest between ants',
    '2 mouse 2 jammer',
    'Anything for family'
  ];
  const author = ['By kartik', 'By saksham', 'By paulwalker'];
  const rating = [4.5, 3.8, 5.0];

  return (
    <div className="App">

  <CenteredBar/>
  <Header/>
  <h1> FEATURED ARTICLE</h1>
  <FeaturedArticle
        imageUrls={imageUrls}
        titles={titles}
        descriptions={descriptions}
        authors={authors}
        ratings={ratings}
      />

<button >See all Articles</button>

  <h1> FEATURED TUTORIAL</h1>
 <FeaturedTutorial
        imageUrls={imageUrl}
        titles={title}
        descriptions={description}
        authors={author}
        ratings={rating}
      /> 
<button >See all Tutorials</button>
  <Mail/>
  <About/>
      

     
     
    </div>
  );
}

export default App;
