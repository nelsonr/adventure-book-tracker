import './App.scss'
import Box from './components/Box'
import Group from './components/Group'
import List from './components/List'
import StatsItem from './components/StatsItem'

function App () {
    return (
        <main>
            <Group isVertical={true} fill={true}>
                <Group>
                    <Box><h1>Stats & Equipment</h1></Box>
                </Group>

                <Group>
                    <StatsItem title="Skill"></StatsItem>
                    <StatsItem title="Stamina"></StatsItem>
                    <StatsItem title="Luck"></StatsItem>
                </Group>

                <Group isVertical={true} fill={true}>
                    <Group fill={true}>
                        <List title="Equipment" />

                        <Group isVertical={true} fill={true}>
                            <Group isVertical={true}>
                                <StatsItem title="Gold" />

                                <List title="Jewels" />

                                <List title="Potions" />
                            </Group>

                            <List title="Provisions" />
                        </Group>
                    </Group>
                </Group>
            </Group>
        </main>
    )
}

export default App