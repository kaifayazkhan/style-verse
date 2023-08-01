import { LiaTimesSolid } from "react-icons/lia"
import { style } from "../constant/globalStyle";
const SizeModal = ({ closeModal }) => {
    return (
        <div className="w-full md:w-2/4 bg-gray-100 p-4 ">
            <div className="modal-body">
                <div className={`${style["flex-row"]} text-md md:text-xl`}>
                    <p>Size Chart</p>
                    <LiaTimesSolid onClick={closeModal} className="cursor-pointer" />
                </div>
                <table className="border-collapse border w-full mt-4 text-center border-slate-400 text-[10px] md:text-sm">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 ">Size</th>
                            <th className="border border-slate-300">Chest</th>
                            <th className="border max-w-[50px] md:max-w-sm border-slate-300">Brand Size</th>
                            <th className="border border-slate-300">Shoulder</th>
                            <th className="border border-slate-300">Length</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-300 ">S</td>
                            <td className="border border-slate-300 ">40</td>
                            <td className="border border-slate-300 ">S</td>
                            <td className="border border-slate-300 ">17.8</td>
                            <td className="border border-slate-300 ">27</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 ">M</td>
                            <td className="border border-slate-300 ">42</td>
                            <td className="border border-slate-300 ">M</td>
                            <td className="border border-slate-300 ">18.25</td>
                            <td className="border border-slate-300 ">28</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 ">L</td>
                            <td className="border border-slate-300 ">44</td>
                            <td className="border border-slate-300 ">L</td>
                            <td className="border border-slate-300 ">18.75</td>
                            <td className="border border-slate-300 ">29</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 ">XL</td>
                            <td className="border border-slate-300 ">46</td>
                            <td className="border border-slate-300 ">XL</td>
                            <td className="border border-slate-300 ">18</td>
                            <td className="border border-slate-300 ">30</td>
                        </tr>
                    </tbody>
                </table>

                <div className="mt-4 text-sm flex flex-col gap-2">
                    <p className="text-md font-bold">Measuring guide:</p>
                    <p className="italic">Not sure about your  size? Follow these simple steps to figure it out:</p>
                    <div> <span className="font-semibold italic">Shoulder</span> - Measure the shoulder at the back, from edge to edge with arms relaxed on both sides</div>
                    <div><span className="font-semibold italic">Chest</span> - Measure around the body under the arms at the fullest part of the chest with your arms relaxed at both sides.</div>
                    <div> <span className="font-semibold italic">Sleeve</span> - Measure from the shoulder seam through the outer arm to the cuff/hem</div>
                    <div><span className="font-semibold italic">Neck</span> - Measured horizontally across the neck Length - Measure from the highest point of the shoulder seam to the bottom hem of the garments</div>
                </div>

            </div>
        </div>
    )
}
export default SizeModal;