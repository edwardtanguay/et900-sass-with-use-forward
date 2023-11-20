import './sass/main.scss';

function App() {
	return (
		<>
		<h1>Sass with @use/@forward</h1>
		<p className="error-text spacing">This is an error.</p>
		<p className="info-text spacing">This is an info.</p>
		<p className="normal-text spacing">This is a normal text.</p>
		<p className="faded-text spacing">This is a faded text.</p>		

		<p className="ball-001 spacing"></p>
		<p className="ball-002 shadow spacing"></p>
		<p className="ball-003 spacing"></p>
		<p className="ball-004 spacing"></p>

		<p className="box-1 spacing"></p>
		<p className="box-2 spacing"></p>
		<p className="box-3 spacing"></p>
		<p className="box-4 spacing"></p>

		<p className="rectangle-red spacing"></p>
		<p className="rectangle-blue spacing"></p>
		<p className="rectangle-green spacing"></p>
		<p className="rectangle-orange spacing"></p>
		</>
	)
}
export default App