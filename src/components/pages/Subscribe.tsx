import Button from '../ui/Button';

const Subscribe = () => {
	return (
		<div className="flex flex-col items-center justify-center px-4 py-10 text-center text-white border border-blue-500 bg-rubinas font-montserrat">
			<h3>TURITE KLAUSIMŲ?</h3>
			<h1 className="text-5xl font-medium leading-tight">
				Užpildžius formą, mes
				<div className="italic font-normal">netrukus atsakysime</div>
			</h1>
			<Button variant="light">Pildyti formą</Button>
			<div className="flex items-center justify-center w-10 h-16 my-12">
				<div className="w-px h-full bg-white bg-opacity-40" />
			</div>
			<div className="text-2xl font-normal opacity-95">
				Taip pat galite susisiekti su mumis telefonu
				<br />
				arba elektroniniu paštu
			</div>
		</div>
	);
};

export default Subscribe;
