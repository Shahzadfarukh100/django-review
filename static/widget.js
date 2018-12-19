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
                h.textContent = data.username;
                h.style.fontSize = '12px';
                h.style.margin = '10px';

                let z = document.createElement('div');
                z.textContent = data.creation_date;
                z.style.fontSize = '12px';

                let ratings = document.createElement('div');
                ratings.style.fontSize = '13px';
                ratings.style.marginBottom = '8px';
                for (let i = 0; i < data.average_rating; i++) {
                    ratings.innerHTML += '<i class="text-warning fa fa-star"> </i>';
                }

                let edit = document.createElement('a');
                edit.className = 'float-right text-info fa fa-edit';
                edit.href = 'http://127.0.0.1:8000/review/' + id + '/update';

                let del = document.createElement('a');
                del.className = 'float-right text-info fa fa-trash';
                del.href = 'http://127.0.0.1:8000/review/' + id + '/delete';


                let c = document.createElement('div');
                c.style.fontSize = '13px';
                c.textContent = data.content;

                let r = document.createElement('div');
                r.className = 'col-sm-9';
                r.appendChild(del);
                r.appendChild(edit);
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
                col1.style.backgroundColor = '#FAFAFA';
                col1.style.border = '1px solid #EFEFEF';
                col1.style.padding = '15px';
                col1.style.borderRadius = '3px';
                col1.style.marginBottom = '15px';
                col1.appendChild(row);

                let row1 = document.createElement('div');
                row1.className = 'row';
                row1.appendChild(col1);

                let nm = document.createElement('h5');
                nm.textContent = data.name;

                let con = document.createElement('div');
                con.className = 'container';
                con.appendChild(nm);
                con.appendChild(row1);

                $("#myWidget").html(con);
            }
        );
}
