import './section.css'


export default function BentoGrid() {

  

    return (
   
        <div className='bento-wrap'>
        <div class="grid padding-sides" >
      
	<div class="grid__item grid__item--main grid__item--logo grid-image-03">
	
	</div>

	<div class="grid__item grid__item--feat-1 grid-image-02">
		<div class="grid__content grid__content--vertical ">
			<i class="fa-light fa-robot-astromech fa-3x"></i>
			{/* <span class="grid__">zukunftssicher</span> */}
		</div>
	</div>
	<div class="grid__item grid__item--feat-2 grid-image-05">
		
	</div>
	<div class="grid__item grid__item--feat-3 grid-image-01">
		
	</div>
	<div class="grid__item grid__item--feat-4">
		
	</div>
	<div class="grid__item grid__item--feat-5">
		<div class="grid__content grid__content--vertical">
			<span class="grid__txt grid__txt--big">WYSIWYG</span>
			<span class="grid__txt">Editor</span>
		</div>
	</div>
	<div class="grid__item grid__item--feat-6">
		<div class="grid__content grid__content--vertical">
			<i class="fa-solid fa-comet fa-3x"></i>
			<span class="grid__txt"><b>Comet</b> inside</span>
		</div>
	</div>
	<div class="grid__item grid__item--feat-7 grid-gradient-01">
		
	</div>
	<div class="grid__item grid__item--feat-8">
		
	</div>
	<div class="grid__item grid__item--feat-9 grid-image-04">
		<div class="grid__content grid__content--vertical">
			<i class="fa-light fa-headset fa-3x"></i>
			<span class="grid__txt">kostenloser Support</span>
		</div>
	</div>
    </div>
      
        </div>
  
    );
}
