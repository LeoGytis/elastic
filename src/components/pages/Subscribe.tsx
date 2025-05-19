import Button from '../ui/Button';

const Subscribe = () => {
	return (
		<div className="flex flex-col items-center justify-center px-4 py-10 text-center text-white bg-rubinas font-montserrat">
			<h3>TURITE KLAUSIMŲ?</h3>
			<h1 className="text-5xl font-medium leading-tight">
				Užpildžius formą, mes
				<div className="italic font-normal">netrukus atsakysime</div>
			</h1>
			<Button variant="light">Pildyti formą</Button>
			<span className="w-px h-[75px] bg-border/60 my-14"></span>
			<h1 className="text-2xl">
				Taip pat galite susisiekti su mumis telefonu
				<br />
				arba elektroniniu paštu
			</h1>
		</div>
	);
};

export default Subscribe;
