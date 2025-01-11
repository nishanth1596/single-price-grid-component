import styles from "./Card.module.css";

function Card() {
  return (
    <article className={styles.article}>
      <div className={styles.heading}>
        <h1>Join our community</h1>
        <p className={styles.paraPrimary}>
          30-day, hassle-free money back guarantee
        </p>
        <p className={styles.paraSecondary}>
          {" "}
          Gain access to our full library of tutorials along with expert code
          reviews.{" "}
          <span className={styles.paraSpan}>
            Perfect for any developers who are serious about honing their
            skills.
          </span>
        </p>
      </div>

      <div className={styles.subscription}>
        <h2>Monthly Subscription</h2>
        <p className={styles.subscriptionParaPrimary}>
          $29 <span>per month</span>
        </p>
        <p className={styles.subscriptionParaSecondary}>
          Full access for less than $1 a day
        </p>
        <button>Sign Up</button>
      </div>

      <div className={styles.whyUs}>
        <h3>Why Us</h3>
        <p>Tutorials by industry experts</p>
        <p>Peer &amp; expert code review</p>
        <p>Coding exercises</p>
        <p>Access to our GitHub repos</p>
        <p>Community forum</p>
        <p>Flashcard decks</p>
        <p>New videos every week</p>
      </div>
    </article>
  );
}

export default Card;
