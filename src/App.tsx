import { ClearTimer } from './tasks/clear-timer/ClearTimer'
import { Timer } from './tasks/closers/Closers'
import { DropDown } from './tasks/dropdown/DropDown'
import MyApp from './tasks/memoization/Memoization'

import { MyUseCallback } from './tasks/useCallback/useCallback'
import { WithoutDeps } from './tasks/without-deps/WithoutDeps'

function App() {
  return (
    <>
      {/* <DropDown /> */}
      {/* <Timer /> */}
      {/* <WithoutDeps /> */}
      {/* <ClearTimer /> */}
      {/* <MyUseCallback /> */}
      <MyApp />
    </>
  )
}

export default App
