import {Slider} from '@/components/ui/slider/slider'

export function App() {
    return (
        <div>
            <Slider value={[0, 10]} min={0} max={100}/>
        </div>
    )
}
