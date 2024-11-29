import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <p className="app-title">Alert PCC: Predict Post COVID-19 Conditions</p>
      <p className="app-title-note">only applied to individuals who have infected with COVID-19 at least once</p>

      <form className="alert-pcc-form">
        <div className="title">Demographic Information</div>
        <div className="demographic-container content-container">
          <div className="content">
            <span>Sex:</span>
            <input type="radio" id="male" name="sex" value="sex_Female" />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="sex" value="sex_Male" />
            <label htmlFor="female">Female</label>
          </div>
          <div className="content">
            <label htmlFor="race-select">Race:</label>
            <select name="race" id="race-select">
              <option value="">--Please choose an option--</option>
              <option value="race_White">White</option>
              <option value="race_Black">Black or African American</option>
              <option value="race_AlaskaNative">American Indian or Alaska Native</option>
              <option value="race_Asian">Asian</option>
              <option value="race_Hawaiian">Native Hawaiian or Other Pacific Islander</option>
              <option value="race_Other">Other Race</option>
              <option value="race_Multi">Multi-racial</option>
              <option value="race_Unknown">Unknown</option>
            </select>
          </div>
          <div className="content">
            <label htmlFor="ethnicity-select">Ethnicity:</label>
            <select name="ethnicity" id="ethnicity-select">
              <option value="">--Please choose an option--</option>
              <option value="ethnicity_Hispanic">Hispanic or Latino</option>
              <option value="ethnicity_NotHispanic">Not Hispanic or Latino</option>
              <option value="ethnicity_Unknown">Unknown</option>
            </select>
          </div>
          <div className="content">
            <label htmlFor="insurance-select">Insurance:</label>
            <select name="insurance" id="insurance-select">
              <option value="">--Please choose an option--</option>
              <option value="insured_Medicare">Medicare</option>
              <option value="insured_Medicaid">Medicaid</option>
              <option value="insured_Private">Private</option>
              <option value="insured_Other">Other</option>
              <option value="insured_Unknown">Unknown</option>
              <option value="insured_Uninsured">Uninsured</option>
            </select>
          </div>
        </div>
        <div className="title">COVID-19 Vaccines and Infections</div>
        <div className="content-container covid-vaccines-container">
          <div className="content">
            <span>COVID-19 vaccine doses received:</span>
            <ol>
              <li><span>Janssen Doses:</span><input type="number" defaultValue="0" /></li>
              <li><span>Moderna Doses:</span><input type="number" defaultValue="0" /></li>
              <li><span>PfizerBioNTech Doses:</span><input type="number" defaultValue="0" /></li>
              <li><span>Other Doses:</span><input type="number" defaultValue="0" /></li>
            </ol>
          </div>
          <div className="content">
            <span>Among these doses, how many doses received before the initial COVID-19 infection?</span>
            <input type="number" defaultValue="0" />
          </div>
          <div className="content">
            <span>How many times the patient got COVID-19?</span>
            <input type="number" defaultValue="1" />
            <p>(must be at least 1)</p>
          </div>
        </div>
        <div className="title">Information at the Initial COVID-19 Infection</div>
        <div className="content-container covid-infection-container">
          <div className="content">
            <div>
              <span>Age:</span>
              <input className="age-input" type="number" />
            </div>
            <div>
              <span>Was Homeless:</span>
              <input type="radio" id="homeless_yes" name="homeless" value="1" />
              <label htmlFor="homeless_yes">Yes</label>
              <input type="radio" id="homeless_no" name="homeless" value="0" />
              <label htmlFor="homeless_no">No</label>
            </div>
            <div>
              <span>BMI:</span>
              <input className="bmi-input" type="number" />
            </div>
            <div>
              <label htmlFor="smoking-select">Smoking:</label>
              <select name="smoking" id="smoking-select">
                <option value="">--Please choose an option--</option>
                <option value="smoke_Everyday">Current every day smoker</option>
                <option value="smoke_Someday">Current some day smoker</option>
                <option value="smoke_Former">Former smoker</option>
                <option value="smoke_Never">Never smoker</option>
                <option value="smoke_SmokerFrequencyUnknown">Smoker, current frequency unknown</option>
                <option value="smoke_Unknown">Unknown if ever smoked</option>
              </select>
            </div>
          </div>
          <div className="content2">
            <span>Comorbidities:</span>
            <div className="comorbidity-container">
              <div className="comorbidity">
                <input type="checkbox" id="asthma" name="asthma" value="comorb_Asthma" />
                <label htmlFor="asthma">Asthma</label>
              </div>
              <div className="comorbidity">
                <input type="checkbox" id="disabilities_sight_hearing" name="disabilities_sight_hearing" value="comorb_DisabilitiesSightOrHearing" />
                <label htmlFor="disabilities_sight_hearing">Disabilities Sight or Hearing</label>
              </div>
              <div className="comorbidity">
                <input type="checkbox" id="mobility_disability" name="mobility_disability" value="comorb_MobilityDisability" />
                <label htmlFor="mobility_disability">Mobility Disability</label>
              </div>
              <div className="comorbidity">
                <input type="checkbox" id="disabilities_general" name="disabilities_general" value="comorb_DisabilitiesGeneral" />
                <label htmlFor="disabilities_general">Disabilities in general</label>
              </div>
              <div className="comorbidity">
                <input type="checkbox" id="cerebrovascular" name="cerebrovascular" value="comorb_Cerebrovascular" />
                <label htmlFor="cerebrovascular">Cerebrovascular</label>
              </div>
              <div className="comorbidity">
                <input type="checkbox" id="chronic_kidney" name="chronic_kidney" value="comorb_ChronicKidneyDisease" />
                <label htmlFor="chronic_kidney">Chronic Kidney Disease</label>
              </div>
              <div className="comorbidity">
                <input type="checkbox" id="heart_disease" name="heart_disease" value="comorb_Heart" />
                <label htmlFor="heart_disease">Heart Disease</label>
              </div>
              <div className="comorbidity">
                <input type="checkbox" id="diabetes" name="diabetes" value="comorb_Diabetes" />
                <label htmlFor="diabetes">Diabetes</label>
              </div>
              <div className="comorbidity">
                <input type="checkbox" id="liver" name="liver" value="comorb_Liver" />
                <label htmlFor="liver">Liver Disease</label>
              </div>
              <div className="comorbidity">
                <input type="checkbox" id="immunodeficiency" name="immunodeficiency" value="comorb_Immunodeficiency" />
                <label htmlFor="immunodeficiency">Immunodeficiency</label>
              </div>
              <div className="comorbidity">
                <input type="checkbox" id="cancer" name="cancer" value="comorb_Cancer" />
                <label htmlFor="cancer">Cancer</label>
              </div>
              <div className="comorbidity">
                <input type="checkbox" id="neurologic" name="neurologic" value="comorb_Neurologic" />
                <label htmlFor="neurologic">Neurologic</label>
              </div>
              <div className="comorbidity">
                <input type="checkbox" id="obesity" name="obesity" value="comorb_Obesity" />
                <label htmlFor="obesity">Obesity</label>
              </div>
            </div>
          </div>
          <div className="content">
            <span>Was the patient prescribed with immunosuppressive medication before their initial COVID-19?</span>
            <div>
              <input type="radio" id="immunosuppressive_med_yes" name="immunosuppressive_med_ordered_before_covid" value="1" />
              <label htmlFor="immunosuppressive_med_yes">Yes</label>
              <input type="radio" id="immunosuppressive_med_no" name="immunosuppressive_med_ordered_before_covid" value="0" />
              <label htmlFor="immunosuppressive_med_no">No</label>
            </div>
          </div>
          <div className="content">
            <span>How many times did the patient hospitalize?</span>
            <input className="hopitalization-input" type="number" />
          </div>
          <div className="sub-content">
            <div className="line1">
              <div>
                <span>Admitted as Emergency:</span>
                <input type="radio" id="adm_type_yes" name="adm_type_Emergency" value="1" />
                <label htmlFor="adm_type_yes">Yes</label>
                <input type="radio" id="adm_type_no" name="adm_type_Emergency" value="0" />
                <label htmlFor="adm_type_no">No</label>
              </div>
              <div>
                <label htmlFor="discharge-status-select">Discharge Status:</label>
                <select name="discharge-status" id="discharge-status-select">
                  <option value="">--Please choose an option--</option>
                  <option value="dis_stat_DischargedToHome">Discharged to Home</option>
                  <option value="dis_stat_TransferredToAnotherHospital">Transferred to another hospital</option>
                  <option value="dis_stat_TransferredToANursingHomeOrHospice">Transferred to a nursing home (SNF/ICF) or hospice</option>
                  <option value="dis_stat_Died">Died</option>
                  <option value="dis_stat_LeftAgainst">Left against medical advice</option>
                  <option value="dis_stat_DischargedUnknown">Discharged alive, destination unknown</option>
                  <option value="dis_stat_Unknown">Unknown</option>
                </select>
              </div>
            </div>
            <div className="line2">
              <span>Got Diagnosis of:</span>
              <div className="diagnosis-container">
                <div className="diagnosis">
                  <input type="checkbox" id="pneumonia" name="pneumonia" value="pneumonia" />
                  <label htmlFor="pneumonia">Pneumonia</label>
                </div>
                <div className="diagnosis">
                  <input type="checkbox" id="thrombosis" name="thrombosis" value="thrombosis" />
                  <label htmlFor="thrombosis">Acute Thrombosis</label>
                </div>
                <div className="diagnosis">
                  <input type="checkbox" id="icu" name="icu" value="icu" />
                  <label htmlFor="icu">Admitted to ICU</label>
                </div>
                <div className="diagnosis">
                  <input type="checkbox" id="highflow" name="highflow" value="highflow" />
                  <label htmlFor="highflow">High flow nasal cannula</label>
                </div>
                <div className="diagnosis">
                  <input type="checkbox" id="critical_care" name="critical_care" value="critical_care" />
                  <label htmlFor="critical_care">Critical condition</label>
                </div>
              </div>
            </div>
          </div>
          <div className="content2">
            <span>COVID-19 Medication(s) ordered:</span>
            <div className="medication-container">
              <div className="medication">
                <input type="checkbox" id="remdesivir" name="remdesivir" value="remdesivir" />
                <label htmlFor="remdesivir">Remdesivir</label>
              </div>
              <div className="medication">
                <input type="checkbox" id="paxlovid" name="paxlovid" value="paxlovid" />
                <label htmlFor="paxlovid">Paxlovid</label>
              </div>
              <div className="medication">
                <input type="checkbox" id="dexamethasone" name="dexamethasone" value="dexamethasone" />
                <label htmlFor="dexamethasone">Steroids (oral or parenteral dexamethasone)</label>
              </div>
              <div className="medication">
                <input type="checkbox" id="inh_steroids" name="inh_steroids" value="inh_steroids" />
                <label htmlFor="inh_steroids">Steroids (inhaled dexamethasone, outpatient)</label>
              </div>
              <div className="medication">
                <input type="checkbox" id="oth_steroids" name="oth_steroids" value="oth_steroids" />
                <label htmlFor="oth_steroids">Steroids (oral or parenteral) other than dexamethasone, such as Prednisone, Methyl Prednisone, Hydrocortisone</label>
              </div>
            </div>
          </div>
        </div>
        <div className="title">Vulnerability & Geographical Indices basing on patient's Census Tract Code</div>
        <div className="census-container">
          <div>
            <span>Census Tract population density</span>
            <input type="number" defaultValue="18355.2" />
          </div>
          <div>
            <span>Percentile percentage of civilian noninstitutionalized population with a disability estimate</span>
            <input type="number" defaultValue="9" />
          </div>
          <div>
            <span>Rural/urban residence</span>
            <input type="number" defaultValue="1" />
          </div>
          <div>
            <span>Percentile percentage of single-parent households with children under 18 estimate</span>
            <input type="number" defaultValue="9" />
          </div>
          <div>
            <span>Census Tract-level CDC/ATSDR Social Vulnerability Index</span>
            <input type="number" defaultValue="9" />
          </div>
          <div>
            <span>Percentile percentage of persons (age 5+) who speak English "less than well" estimate</span>
            <input type="number" defaultValue="9" />
          </div>
          <div>
            <span>Percentile percentage of persons below 150% poverty estimate</span>
            <input type="number" defaultValue="9" />
          </div>
          <div>
            <span>Percentile ranking for Household Characteristics theme summary</span>
            <input type="number" defaultValue="9" />
          </div>
          <div>
            <span>Percentile percentage of civilian (age 16+) unemployed estimate</span>
            <input type="number" defaultValue="9" />
          </div>
          <div>
            <span>Percentile percentage minority</span>
            <input type="number" defaultValue="9" />
          </div>
          <div>
            <span>Percentile percentage of housing cost- burdened occupied housing units estimate</span>
            <input type="number" defaultValue="9" />
          </div>
          <div>
            <span>Percentile percentage housing in structures with 10 or more units estimate</span>
            <input type="number" defaultValue="9" />
          </div>
          <div>
            <span>Percentile percentage of persons with no high school diploma (age 25+) estimate</span>
            <input type="number" defaultValue="8" />
          </div>
          <div>
            <span>Percentile percentage households with more people than rooms estimate</span>
            <input type="number" defaultValue="6" />
          </div>
          <div>
            <span>Percentile ranking for Socioeconomic Status theme summary</span>
            <input type="number" defaultValue="9" />
          </div>
          <div>
            <span>Percentile percentage mobile homes estimate</span>
            <input type="number" defaultValue="0" />
          </div>
          <div>
            <span>Percentile percentage of persons aged 65 and older estimate</span>
            <input type="number" defaultValue="3" />
          </div>
          <div>
            <span>Percentile percentage households with no vehicle available estimate</span>
            <input type="number" defaultValue="10" />
          </div>
          <div>
            <span>Percentile percentage of persons aged 17 and younger estimate</span>
            <input type="number" defaultValue="7" />
          </div>
          <div>
            <span>Percentile percentage of persons in group quarters estimate</span>
            <input type="number" defaultValue="6" />
          </div>
          <div>
            <span>Percentile percentage of uninsured estimate</span>
            <input type="number" defaultValue="6" />
          </div>
          <div>
            <span>Percentile ranking for Housing Type/ Transportation theme</span>
            <input type="number" defaultValue="7" />
          </div>
        </div>

      </form>
      <div className="form-container">
      </div>
      
      <button type="submit" className="predict-button">Predict Post COVID-19 Risk</button>
    </div>
  );
};

export default App;
