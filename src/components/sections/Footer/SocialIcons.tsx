import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

const SocialIcons = () => {
	return (
		<section className="flex gap-4 mt-4">
			<div className="flex items-center justify-center rounded-full size-8 bg-rubinas">
				<FaInstagram className="fill-perlas" />
			</div>
			<div className="flex items-center justify-center rounded-full size-8 bg-rubinas">
				<FaFacebook className="fill-perlas" />
			</div>
			<div className="flex items-center justify-center rounded-full size-8 bg-rubinas">
				<FaLinkedin className="fill-perlas" />
			</div>
		</section>
	);
};

export default SocialIcons;
