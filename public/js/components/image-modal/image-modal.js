import Modal from "../modal/modal";

class ImageModal extends Modal
{
	constructor(id)
	{
		super(id);

		this.dropArea = this.element.querySelector(".drop-area");
		this.dropArea.addEventListener("dragover", (e) => this.imageDraggedOver(e));
		this.dropArea.addEventListener("drop", (e) => this.imageDropped(e));

		this.imagePreview = this.element.querySelector("#image-preview");

		const imageFileInput = this.element.querySelector("#image-file-input");
		imageFileInput.addEventListener("change", (e) => this.imageFileInputChanged(e));
	}

	show()
	{
		super.show();
		this.element.querySelectorAll(".hide-on-drop").forEach(item =>
		{
			item.style.display = "initial";
		});

		this.dropArea.style.borderWidth = "1px";
		this.element.querySelector(".drop-area p").style.display = "block";

		this.imagePreview.src = "";
		if (!this.imagePreview.classList.contains("hidden"))
			this.imagePreview.classList.add("hidden");

		this.element.querySelector("#add-image").disabled = true;
	}

	hide()
	{
		super.hide();
		this.element.querySelector("#image-file-input").value = "";
	}

	imageDraggedOver(e)
	{
		e.preventDefault();
		e.dataTransfer.dropEffect = 'copy';
	}

	imageDropped(e)
	{
		e.preventDefault();
		this.loadBackgroundImage(e.dataTransfer.files[0]);

		this.element.querySelectorAll(".hide-on-drop").forEach(item =>
		{
			item.style.display = "none";
		});

		this.element.querySelector("#add-image").disabled = false;
	}

	imageFileInputChanged(e)
	{
		this.element.querySelectorAll(".hide-on-image-input").forEach(item =>
		{
			item.style.display = "none";
		});

		this.loadBackgroundImage(e.currentTarget.files[0]);
		this.element.querySelector("#add-image").disabled = false;
	}

	// load image from provided file and display in preview area
	loadBackgroundImage(file)
	{
		if (file != null && file.type.match(/image*/))
		{
			let reader = new FileReader();
			reader.onload = (readerEv) =>
			{
				this.imagePreview.src = readerEv.target.result;
				if (this.imagePreview.classList.contains("hidden"))
					this.imagePreview.classList.remove("hidden");

				this.dropArea.style.borderWidth = "0px";
			};

			reader.readAsDataURL(file);
		}
	}

	onAddImageBtnClick(callback)
	{
		this.element.querySelector("#add-image").addEventListener("click", callback);
	}
}

export default ImageModal;