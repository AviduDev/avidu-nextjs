import styles from './Card.module.css';

export default function Card() {
    return(
        <section classNameName={styles.root}>
            <h1>Cards</h1>

            {/* ------------------------ */}

        <div className={styles.cards}>
			<div className={styles.card} id="c1">
				<h2>card 1</h2>
			</div>
			<div className={styles.card} id='2'>
				<h2>card 2</h2>
			</div>
			<div className={styles.card} id='3'>
				<h2>card 3</h2>
			</div>
			<div className={styles.card} id='4'>
				<h2>card 4</h2>
			</div>
			<div className={styles.card} id='5'>
				<h2>card 5</h2>
			</div>
		</div>
        </section>
    )
}