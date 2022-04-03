
$(document).ready(function () {
    $(document).on("click", "#productdetailId", function (e) {
        e.preventDefault();
        let url = $(this).attr("href");
        console.log(url);

        fetch(url).then(res => { return res.text }).then(data =>
        {
            /* console.log(data)*/
            $("quickModal .product-details-modal").append.(data);


        });
        $("quickModal").model("show");
    })
})