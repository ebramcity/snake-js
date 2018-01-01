function drawBackground(context, size, blockCount, blockWidth) {
	context.fillRect(0, 0, size, size);
	context.strokeStyle = 'rgba(255,255,255,0.1)';
	for (let i=0; i<blockCount; ++i) {
		context.moveTo(i * blockWidth, 0);
		context.lineTo(i * blockWidth, size);

		context.moveTo(0, i * blockWidth);
		context.lineTo(size, i * blockWidth);
	}
	context.stroke();	
}

export default class Screen{
	constructor(canvas, size, blockCount) {
		this.size = size;
		this.blockCount = blockCount;
		this.blockWidth = size / blockCount;
		canvas.width = canvas.height = size;
		this.background = document.createElement('canvas');
		this.background.width = this.size;
		this.background.height = this.size;
		drawBackground(this.background.getContext('2d'), size, this.blockCount, this.blockWidth);
	}

	draw(context) {
		context.clearRect(0, 0, this.size, this.size);
		context.drawImage(this.background, 
							0 , 0,
							this.size, this.size,
							0, 0 ,
							this.size, this.size,);
	}
}
