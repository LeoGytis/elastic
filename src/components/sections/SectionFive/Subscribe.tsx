import Button from '@/components/ui/Button';

const Subscribe = () => {
	return (
		<article className="flex flex-col items-center justify-center px-4 py-16 text-center text-white bg-rubinas font-montserrat">
			<h3>TURITE KLAUSIMŲ?</h3>
			<h1 className="text-5xl font-medium leading-tight pb-[34px] pt-2">
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
		</article>
	);
};

export default Subscribe;
