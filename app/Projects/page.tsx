import Header from '../components/header'
import Content from '../components/content-card'
export default function Home() {
  return (
    <main>
      <Header />
      <div id="Project-Div">
        <h1 className="text-center">Projects</h1>
        <div className='w-1/3'>
          <Content title="Cool" body="Guy" image="price chart" />
        </div>
      </div>
    </main>
  );
}
