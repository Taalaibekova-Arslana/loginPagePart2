import scss from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={scss.Footer}>
			<div className={scss.content}>
				<p>© 2024 Бишкек г. Кыргызстан</p>
				<p>Taalaibekova Arslana</p>
				<p>+996 504801088</p>
				<p>arslanataalaibekova@gmail.com</p>
			</div>
		</footer>
	);
};

export default Footer;
