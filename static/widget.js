function gettingData(id) {
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:8000/api/review/" + id,
    })
        .done(function (data) {

                let x = document.createElement('img');
                x.src = 'http://dummyimage.com/60x60/666/ffffff&text=No+Image';
                x.className = 'rounded-circle';

                let h = document.createElement("div");
                h.textContent = data.user;
                h.className = 'review-block-name';

                let z = document.createElement('div');
                z.textContent = data.creation_date;
                z.className = 'review-block-date';

                let ratings = document.createElement('div');
                ratings.className = 'review-block-rate ';
                for (var i = 0; i<data.rating; i++) {
                    ratings.innerHTML += '<i class="text-warning fa fa-star"> </i>';
                }


                let c = document.createElement('div');
                c.className = 'review-block-description';
                c.textContent = data.content;

                let r = document.createElement('div');
                r.className = 'col-sm-9';
                r.appendChild(ratings);
                r.appendChild(c);

                let col = document.createElement('div');
                col.className = 'col-sm-3';
                col.appendChild(x);
                col.appendChild(h);
                col.appendChild(z);

                let row = document.createElement('div');
                row.className = 'row';
                row.appendChild(col);
                row.appendChild(r);

                let col1 = document.createElement('div');
                col1.className = 'col-sm-8';
                col1.appendChild(row);

                let row1 = document.createElement('div');
                row1.className = 'row review-block';
                row1.appendChild(col1);

                $("#form").html(row1);
            }
        );
}
