import Deals from "./components/Deals";
import IntroSection from "./components/IntroSection";
import ItemsList from "./components/ItemsList";



export default function Home() {

  return (
    <main className="max-width-page">
      <IntroSection />
      <ItemsList />
      <Deals />
      <section id="sign-up">
        <h1>
          Sign up and get exclusive special deals
        </h1>
        <div>
          <input />
          <button>Sign Up</button>
        </div>
      </section>
    </main>
  );
}
