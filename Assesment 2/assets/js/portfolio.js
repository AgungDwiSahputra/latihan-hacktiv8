const nama = document.getElementById("nama");
const role = document.getElementById("role");
const availability = document.getElementById("availability");
const usia = document.getElementById("usia");
const lokasi = document.getElementById("lokasi");
const experience = document.getElementById("experience");
const email = document.getElementById("email");

const edit_btn = document.getElementById("edit");
let hide_FI = false;

// Edit button
edit_btn.addEventListener("click", (e) => {
    e.preventDefault();

    hide_FI = false;

    showhide();
});

// fungsi untuk hide/show form-input
function showhide() {
    if(hide_FI){
        hide_FI = false;
        document.getElementById("form-input").classList.add('hide');
    }else{
        hide_FI = true;
        document.getElementById("form-input").classList.remove('hide');
    }
}

// fungsi ketika di simpan
function simpan() {
    const nama_form = document.getElementById("form-nama").value;
    const role_form = document.getElementById("form-role").value;
    const availability_form = document.getElementById("form-availability").value;
    const usia_form = document.getElementById("form-usia").value;
    const lokasi_form = document.getElementById("form-lokasi").value;
    const experience_form = document.getElementById("form-experience").value;
    const email_form = document.getElementById("form-email").value;

    if (nama_form == '' || role_form == '' || availability_form == '' || usia_form == '' || lokasi_form == '' || experience_form == '' || email_form == '') {
        let text = "Masih terdapat data yang kosong";
        Swal.fire({
            title: 'Error!',
            text: text,
            icon: 'error',
            confirmButtonText: 'close'
        })
    } else {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {
                let text = "Berhasil merubah ";
                nama.innerHTML = nama_form;
                role.innerHTML = role_form
                availability.innerHTML = availability_form;
                usia.innerHTML = usia_form;
                lokasi.innerHTML = lokasi_form;
                experience.innerHTML = experience_form;
                email.innerHTML = email_form;

                hide_FI = true;
                showhide();

                Swal.fire({
                    title: 'Success!',
                    text: text,
                    icon: 'success',
                    confirmButtonText: 'close'
                })
                
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }
}