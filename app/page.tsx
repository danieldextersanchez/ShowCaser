import Header from './components/header'
import Content from './components/content-card'

let configuratorcontent = "A 3D drawing renderer. Built using Next JS for the UI, SQlite for the database, and AutoDesk Forge API to render the drawings. It features dynamic menu that lets Emerson's customers easily navigate through hundred and thousands of drawings easily"
export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="flex items-center space-x-6">
        <img className="w-40 rounded-full" src="./me.PNG"/> 
        <div>
          <h1 className="text-2xl font-bold">Hi I'm Daniel, a fullstack developer</h1>
          <h4 className="text-lg mt-2">
            Haven't put much thought in the design of this portfolio. <br />
            The projects displayed here should be enough to display my skills.
            I'd get back to designing later ^_^ <br />
          </h4>
        </div>
      </div>
      <a href="https://www.linkedin.com/in/daniel-dexter-sanchez-11a843153/" target='_blank'>
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path></svg>
      </a>
      <div className="mt-10 w-3/4 ">
      <h1 className="text-4xl font-bold mb-5">Projects</h1>
      <Content link="https://fcvdrawingconfig.emerson.com/" title="3D Drawing Configurator" body={configuratorcontent} image="3dconfigurator.png" />
      </div>
    </main>
  );
}
