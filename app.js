// click on heart
// it turns red
// modal pops up with contact details 
// if you click submit /  close / click off the screen then the modal will close 
// heart white again
// if user clicks any heart again, then pop up saying, thanks you have already enquired

// let $heart = [...document.querySelectorAll(".heart")];


// // if ($heart.classList.contains("active")) {
// //     alert("one cat at a time plzzz");
// // } else {
//     $heart.forEach(function (elem) {
//         elem.addEventListener("click", function () {
//             console.log(elem);
//             elem.classList.replace("inactive", "active");
//         })
//     })

const modalEnquiry = (_ => {
    const $openModalTrigger = [...document.getElementsByClassName("heart")];
    console.log($openModalTrigger);
    const $closeModalTrigger = document.querySelector(".close");
    const $modal = document.querySelector(".modal");
    const $modalTitle = document.querySelector(".modal__title");
    const $modalBody = document.querySelector(".modal__body");
    const $enquireBtn = document.querySelector(".form-button");

    let enquireBtnClicked = 0;

    function countBtnClicks() {
        enquireBtnClicked++;

        if (enquireBtnClicked === 1) {
            $openModalTrigger.forEach((elem) => {
                elem.style.display = "none";
                $modal.classList.add("open");
                $modalTitle.textContent = "Thanks for registering your interest...";
                $modalBody.textContent = "We will be in touch shortly to discuss your next steps!";
            })
        }
    }

    $enquireBtn.addEventListener("click", countBtnClicks);

    $openModalTrigger.forEach((elem, event) => {
        elem.addEventListener("click", _ => {
                elem.style.color = "red";
                $modal.classList.add("open");
                console.log("pressed it bish");
        })
    })

    $closeModalTrigger.addEventListener("click", _ => {
        $modal.classList.remove("open");
    });

    window.addEventListener("click", (event) => {
        if (event.target === $modal) {
            $modal.classList.remove("open");
        }
    });

})();