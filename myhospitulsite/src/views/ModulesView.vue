<template>
 <Navbar/>

  <section class="my-3" id="top"
  data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="1000"
        data-aos-once="true">
    <p class="primarycolor tex my-3">MyHospitul Module</p>
    <p class="bdy py-1">Our Hospital Management Software has the following modules;</p>
    <ul class="list">
        <li>
            <p>
                <span class="primarycolor befo">Patient Management: </span>
                A feature to manage patients records digitally. These records include the Patient's Social background, medical history, Medical Records etc. The records are accessible both offline and online. This involves;</p>
                <ul class="innerlist">
                    <li class="inneritem">MyHospitul OutPatient Management</li>
                    <li class="inneritem">MyHospitul Inpatient Management</li>
                    <li class="inneritem">Walk-In Patients Management</li>
                </ul>
        </li>
        <li>
            <p>
                <span class="primarycolor befo">Appointment Booking: </span>
                MyHospitul allows Patients and Hospitals to easily book Medical Appointments.</p>
        </li>
        <li>
            <p>
                <span class="primarycolor befo">RxCheck Dashboard: </span>
                RxCheck is a Pharmaceutical Management and Monitoring platform that helps hospitals/pharmacies manage drug inventory, record drug sales and monitor drugs properties.</p>
        </li>
        <li>
            <p>
                <span class="primarycolor befo">Investigations Management: </span>
                MyHospitul creates easy lab templates to input, edit and share investigation results.</p>
        </li>
        <li>
            <p>
                <span class="primarycolor befo">HMO Management: </span>
                MyHospitul helps track all Hospital HMO activities. It automatically monitors, records and generates timely reports related to HMO activities.</p>
        </li>
        <li>
            <p>
                <span class="primarycolor befo">NotifyPlug: </span>
                This feature enhances hospital-patient communication. The hospital can send bulk SMS to their patients using NotifyPlug.</p>
        </li>
        <li>
            <p>
                <span class="primarycolor befo">Dashboard Analytics: </span>
                MyHospitul gives a monthly breakdown statistics of hospital appointments, hospital bills, debtors, drugs sold and bought etc. This gives an accurate insight on the activities that go on in the Hospital. These insights can help the management make better decisions for the Hospital.</p>
        </li>
        <li>
            <p>
                <span class="primarycolor befo">MyHospitul Drive: </span>
                MyHospitul offers a cloud-based file storage feature. Files are easily backed up in MyHospitul drive to be retrieved anytime and with any device.</p>
        </li>
        <li>
            <p>
                <span class="primarycolor befo">MyHospitul Inventory Management: </span>
                This feature takes inventory of the custom prices, accounting, deals with vendors and even inventory of hospital/patient's visitors. This would help improve the record keeping of the hospital.</p>
        </li>
        <li>
            <p>
                <span class="primarycolor befo">MyHospitul Mobile Application: </span>
                Having access to some important hospital records from the comfort of a mobile phone. Records like number of patient visits, total income, total debt, investigations etc.</p>
        </li>
        <li>
            <p>
                <span class="primarycolor befo">MyHospitul Human Resources Management Module: </span>
                This is a feature that gives the hospital the ability to manage the following tasks;</p>
                <ul class="innerlist">
                    <li class="inneritem">Attendance Management: <span style="font-weight: 400;">A biometrics powered feature that captures the time when staff come to work</span></li>
                    <li class="inneritem">Payroll Management</li>
                    <li class="inneritem">Staff Shift Management</li>
                    <li class="inneritem">Staff Biodata Management</li>
                </ul>
        </li>
    </ul>
  </section>
  <BaSe/>

  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel"><img src="../assets/myhospitulogo.png" alt="myhospitul_logo" width="40" height="40" class="d-inline-block align-text-top">
      <p class="fw-900 my-2 title mx-2"><span style="color:red">MY</span> HOSPITUL</p></h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="body">
      <ul data-aos="zoom-out"
        data-aos-duration="2000"
        data-aos-delay="0"
        data-aos-once="true">
        <li data-bs-dismiss="offcanvas" aria-label="Close"><router-link class="linkz" to="/">Home</router-link></li>
        <li data-bs-dismiss="offcanvas" aria-label="Close"><router-link class="linkz" to="/demo">Demo</router-link></li>
        <li data-bs-dismiss="offcanvas" aria-label="Close"><router-link class="linkz" to="/modulesview">What we do</router-link></li>
        <li data-bs-dismiss="offcanvas" aria-label="Close"><router-link class="linkz" to="/FAQ">FAQ</router-link></li>
        <li data-bs-dismiss="offcanvas" aria-label="Close"><router-link class="linkz" to="/ContactUs">Contact Us</router-link></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import BaSe from "../components/Base.vue"
import Navbar from "../components/Navbar.vue"
export default {
name: "ModulesView",
components: {
    Navbar,
    BaSe
}
}
</script>

<style scoped>
.tex {
  font-size: 18px;
  font-weight: 600;
}
#top {
    width: 90%;
    margin: auto auto;
}
.befo {
    font-size: 17px;
    font-weight: 600;
}
.list{
    list-style-type: square;
}
.innerlist{
    list-style-type: square;
}
.inneritem {
    font-size: 15px;
    font-weight: 800;
    padding: 3px;
}
</style>