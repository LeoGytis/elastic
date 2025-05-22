import Button from '@/components/ui/Button';

const Subscribe = () => {
	return (
		<article className="flex flex-col items-center justify-center px-4 py-8 text-center text-white lg:py-16 bg-rubinas font-montserrat">
			<h3>TURITE KLAUSIMŲ?</h3>
			<h1 className="font-medium leading-tight pb-8 lg:pb-[34px] pt-2">
				Užpildžius formą, mes
				<div className="italic font-normal">netrukus atsakysime</div>
			</h1>
			<Button variant="light">Pildyti formą</Button>
			<span className="w-px h-8 lg:h-[75px] bg-border/60 lg:my-14 my-6"></span>
			<h1>
				Taip pat galite susisiekti su mumis telefonu
				<br />
				arba elektroniniu paštu
			</h1>
		</article>
	);
};

export default Subscribe;
