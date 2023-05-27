import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [formState, setFormState] = useState({
    question1: 1,
    question2: 21,
    question3: 1,
    question4: 1,
    question5: 1,
    question6: 1,
    question7: 1,
    question8: 1,
    question9: 1,
    question10: 1,
    question11: 1,
    question12: 1,
    question13: 1,
    question14: 1,
    question15: 1,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setFormState({ ...formState, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const options = { method: "GET" };

    fetch(
      "https://phatjk.pythonanywhere.com/test?GENDER="+formState.question1+"&AGE="+formState.question2+"&SMOKING="+formState.question3+"&YELLOWFINGERS="+formState.question4+"&ANXIETY="+formState.question5+"&PEERPRESSURE="+formState.question6+"&CHRONICDISEASE="+formState.question7+"&FATIGUE="+formState.question8+"&ALLERGY="+formState.question9+"&WHEEZING="+formState.question10+"&ALCOHOLCONSUMING="+formState.question11+"&COUGHING="+formState.question12+"&SHORTNESSOFBREATH="+formState.question13+"&SWALLOWINGDIFFICULTY="+formState.question14+"&CHESTPAIN="+formState.question15+"",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        if (response[0] == 1){
          alert("Bạn có thể đang bị ung thư phổi")
        }
        else if(response[0] == 0){
          alert("Bạn có thể KHÔNG bị ung thư phổi")
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <div>
        <h2 className="text-xl font-bold underline">Hệ thống dự đoán bệnh ung thư phổi (@phatjk)</h2>
        <div>
        Model GaussianNB training trên tập dữ liệu <a target="_blank" href="https://www.kaggle.com/datasets/jillanisofttech/lung-cancer-detection">lung-cancer</a>
        
      </div>
          <b>Kết quả chỉ mang tính chất tham khảo</b>
        <p>
          Hãy điền form dưới đây để thực hiện chuẩn đoán.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            1: Giới tính của bạn?
            <div>
              <input
                type="radio"
                name="question1"
                id="question1_y"
                onChange={handleChange} 
                value={1}
              />
               <label for="question1_y">Nam</label>
              <input
                type="radio"
                name="question1"
                id="question1_n"
                onChange={handleChange}
                value={0}
              />
              <label for="question1_n">Nữ</label>
            </div>
          </label>
        </div>
        <div>
          <label>
            2: Độ tuổi của bạn? (21-87)
            <div>
              <input className="input" type="number" name="question2"  min={21} max={87} defaultValue={21} onChange={handleChange} />
            </div>
          </label>
        </div>

        <div>
          <label>
            3: Có hút thuốc?
            <div>
              <input
                type="radio"
                name="question3"
                onChange={handleChange} id="question3_y"
                value={2}
              />
              Có
              <input
                type="radio"
                name="question3"
                onChange={handleChange} id="question3_n"
                value={1}
              />
              <label for="question3_n">Không</label>
            </div>
          </label>
        </div>

        <div>
          <label>
            4: Bạn có bị vàng ngón tay?
            <div>
              <input
                type="radio"
                name="question4"
                onChange={handleChange} id="question4_y"
                value={2}
              />
              Có
              <input
                type="radio"
                name="question4"
                onChange={handleChange} id="question4_n"
                value={1}
              />
              <label for="question4_n">Không</label>
            </div>
          </label>
        </div>

        <div>
          <label>
            5: Bạn có hay lo lắng?
            <div>
              <input
                type="radio"
                name="question5"
                onChange={handleChange} id="question5_y"
                value={2}
              />
              Có
              <input
                type="radio"
                name="question5"
                onChange={handleChange} id="question5_n"
                value={1}
              />
              <label for="question5_n">Không</label>
            </div>
          </label>
        </div>

        <div>
          <label>
            6: Bạn có bị áp lực đồng trang lứa?
            <div>
              <input
                type="radio"
                name="question6"
                onChange={handleChange} id="question6_y"
                value={2}
              />
              Có
              <input
                type="radio"
                name="question6"
                onChange={handleChange} id="question6_n"
                value={1}
              />
              <label for="question6_n">Không</label>
            </div>
          </label>
        </div>

        <div>
          <label>
            7: Bạn có mắc BỆNH MÃN TÍNH?
            <div>
              <input
                type="radio"
                name="question7"
                onChange={handleChange} id="question7_y"
                value={2}
              />
              Có
              <input
                type="radio"
                name="question7"
                onChange={handleChange} id="question7_n"
                value={1}
              />
              <label for="question7_n">Không</label>
            </div>
          </label>
        </div>

        <div>
          <label>
            8: Bạn có hay mệt mỏi?
            <div>
              <input
                type="radio"
                name="question8"
                onChange={handleChange} id="question8_y"
                value={2}
              />
              Có
              <input
                type="radio"
                name="question8"
                onChange={handleChange} id="question8_n"
                value={1}
              />
              <label for="question8_n">Không</label>
            </div>
          </label>
        </div>

        <div>
          <label>
            9: Bạn có bị DỊ ỨNG không?
            <div>
              <input
                type="radio"
                name="question9"
                onChange={handleChange} id="question9_y"
                value={2}
              />
              Có
              <input
                type="radio"
                name="question9"
                onChange={handleChange} id="question9_n"
                value={1}
              />
              <label for="question9_n">Không</label>
            </div>
          </label>
        </div>

        <div>
          <label>
            10: Hơi thở của bạn có tiếng khò khè
            không?
            <div>
              <input
                type="radio"
                name="question10"
                onChange={handleChange} id="question10_y"
                value={2}
              />
              Có
              <input
                type="radio"
                name="question10"
                onChange={handleChange} id="question10_n"
                value={1}
              />
              <label for="question10_n">Không</label>
            </div>
          </label>
        </div>

        <div>
          <label>
            11: Bạn có UỐNG RƯỢU không?
            <div>
              <input
                type="radio"
                name="question11"
                onChange={handleChange} id="question11_y"
                value={2}
              />
              Có
              <input
                type="radio"
                name="question11"
                onChange={handleChange} id="question11_n"
                value={1}
              />
              <label for="question11_n">Không</label>
            </div>
          </label>
        </div>

        <div>
          <label>
            12: Bạn có bị HO không?
            <div>
              <input
                type="radio"
                name="question12"
                onChange={handleChange} id="question12_y"
                value={2}
              />
              Có
              <input
                type="radio"
                name="question12"
                onChange={handleChange} id="question12_n"
                value={1}
              />
              <label for="question12_n">Không</label>
            </div>
          </label>
        </div>

        <div>
          <label>
            13: Bạn có bị HỤT HƠI khi hoạt động không?
            <div>
              <input
                type="radio"
                name="question13"
                onChange={handleChange} id="question13_y"
                value={2}
              />
              Có
              <input
                type="radio"
                name="question13"
                onChange={handleChange} id="question13_n"
                value={1}
              />
              <label for="question13_n">Không</label>
            </div>
          </label>
        </div>

        <div>
          <label>
            14: Bạn có bị KHÓ NUỐT không?
            <div>
              <input
                type="radio"
                name="question14"
                onChange={handleChange} id="question14_y"
                value={2}
              />
              Có
              <input
                type="radio"
                name="question14"
                onChange={handleChange} id="question14_n"
                value={1}
              />
              <label for="question14_n">Không</label>
            </div>
          </label>
        </div>
        <div>
          <label>
            15: Bạn có bị ĐAU NGỰC không?
            <div>
              <input
                type="radio"
                name="question15"
                onChange={handleChange} id="question15_y"
                value={2}
              />
              Có
              <input
                type="radio"
                name="question15"
                onChange={handleChange} id="question15_n"
                value={1}
              />
              <label for="question15_n">Không</label>
            </div>
          </label>
        </div>
        <button type="submit">Phân tích</button>
      </form>
    </>
  );
}

export default App;
