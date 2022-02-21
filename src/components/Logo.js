import styles from "../sass/components/_Header.module.scss";
import "../sass/components/_Header.scss";

const Logo = () => {
	return (
		<span className={styles.friends}>
			<span className="friends-start">
				F<span className="friends-red">.</span>R
				<span className="friends-blue">.</span>I
				<span className="friends-yellow">.</span>E
				<span className="friends-red">.</span>N
				<span className="friends-yellow">.</span>D
				<span className="friends-blue">.</span>S
			</span>
			<span className="friends-end">tagram</span>
		</span>
	)
};

export default Logo;