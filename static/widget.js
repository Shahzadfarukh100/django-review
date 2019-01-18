function gettingData() {
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:8000/api/review/",
    }).done(function (data) {

            let html = document.createElement('div');

            for (let i = 0; i < data.length; i++) {

                let num = data[i].name.split("by");
                console.log(num[0]);

                if (product_name === num[0]) {

                    console.log(product_name);

                    console.log(data[i].id);
                    console.log(data[i].username);

                    let x = document.createElement('img');
                    x.className = 'test rounded-circle';
                    if (data[i].image) {
                        x.src = data[i].image;
                    } else {
                        x.src = "http://dummyimage.com/60x60/666/ffffff&text=No+Image";
                    }

                    let h = document.createElement("div");
                    h.textContent = data[i].username;
                    h.style.fontSize = '12px';
                    h.style.margin = '10px';

                    let z = document.createElement('div');
                    z.textContent = data[i].creation_date;
                    z.style.fontSize = '12px';

                    let ratings = document.createElement('div');
                    ratings.style.fontSize = '13px';
                    ratings.style.marginBottom = '8px';
                    for (let j = 0; j < data[i].average_rating; j++) {
                        ratings.innerHTML += '<i class="text-warning fa fa-star"> </i>';
                    }

                    let edit = document.createElement('a');
                    edit.className = 'float-right text-info fa fa-edit';
                    edit.href = 'http://127.0.0.1:8000/' + data[i].id + '/update';

                    let del = document.createElement('a');
                    del.className = 'float-right text-info fa fa-trash';
                    del.href = 'http://127.0.0.1:8000/' + data[i].id + '/delete';


                    let c = document.createElement('div');
                    c.style.fontSize = '13px';
                    c.textContent = data[i].content;

                    let r = document.createElement('div');
                    r.className = 'col-sm-9';
                    console.log(person, data[i].username);
                    if (person === data[i].username) {
                        r.appendChild(del);
                        r.appendChild(edit);
                    }
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

                    let con = document.createElement('div');
                    con.className = 'container';
                    con.appendChild(row1);

                    html.appendChild(con)
                }
            }
            $("#myWidget").html(html);
        }
    );
}
