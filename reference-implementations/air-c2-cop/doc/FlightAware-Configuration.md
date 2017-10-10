<p>Some current operations feeds may require connecting to a secure stream service. For example, the FlightAware Firehose feed is a premium service, the subscription needs to be arranged with a FlightAware representative. Please see this <a href="http://www.arcgis.com/home/item.html?id=9a49618c30a54071ab75c69e3f4e6090">URL</a> for more details:</p>
<ol class="steps">
			<li>Login to the ArcGIS REST Service URL.</li>
			<li>Obtain the JSON web token for WebSocket Connection.</li>
			<li>Use the WSS URL with the Token to create the GeoEvent Server Input.</li>
<ol>
				<li>Expand the Advanced tab.</li>
				<li>JSON Object Name: attributes</li>
				<li>X Geometry Field: lon</li>
				<li>Y Geometry Field: lat</li>
				<li>Z Geometry Field: alt</li>
			</ol>
<li>Review the GeoEvent Definition auto-generated by this input on the Site > GeoEvent Definition page, and make the necessary changes until it looks like this:</li>
<table class="bordered stripe lined-columns lined-rows">
				<thead>
					<tr>
						<td>Name</td>
						<td>Type</td>
						<td>Cardinality</td>
						<td>Tags</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>type</td>
						<td rowspan="2">String</td>
						<td rowspan="29">1</td>
						<td rowspan="4"></td>
					</tr>
					<tr>
						<td>ident</td>
					</tr>
					<tr>
						<td>lat</td>
						<td rowspan="2">Double</td>
					</tr>
					<tr>
						<td>lon</td>
					</tr>
					<tr>
						<td>clock</td>
						<td>Date</td>
						<td>TIME_START</td>
					</tr>
					<tr>
						<td>updateType</td>
						<td rowspan="4">String</td>
						<td></td>
					</tr>
					<tr>
						<td>id</td>
						<td>TRACK_ID</td>
					</tr>
					<tr>
						<td>air_ground</td>
						<td rowspan="21"></td>
					</tr>
					<tr>
						<td>hewld?</td>
					</tr>
					<tr>
						<td>alt</td>
						<td>Double</td>
					</tr>
					<tr>
						<td>gs</td>
						<td>String</td>
					</tr>
					<tr>
						<td>heading</td>
						<td rowspan="4">Double</td>
					</tr>
					<tr>
						<td>rp1lat</td>
					</tr>
					<tr>
						<td>rp1lon</td>
					</tr>
					<tr>
						<td>rp1alt</td>
					</tr>
					<tr>
						<td>rp1clock</td>
						<td>Date</td>
					</tr>
					<tr>
						<td>fob</td>
						<td rowspan="5">Double</td>
					</tr>
					<tr>
						<td>oat</td>
					</tr>
					<tr>
						<td>airspeed_kts</td>
					</tr>
					<tr>
						<td>airspeed_mach</td>
					</tr>
					<tr>
						<td>winds</td>
					</tr>
					<tr>
						<td>eta</td>
						<td>Date</td>
					</tr>
					<tr>
						<td>baro_alt</td>
						<td rowspan="2">Double</td>
					</tr>
					<tr>
						<td>gps_alt</td>
					</tr>
					<tr>
						<td>atcident</td>
						<td rowspan="4">String</td>
					</tr>
					<tr>
						<td>reg</td>
					</tr>
					<tr>
						<td>squawk</td>
					</tr>
					<tr>
						<td>altChange</td>
					</tr>
					<tr>
						<td>geometry</td>
						<td>Geometry</td>
						<td>GEOMETRY</td>
					</tr>
				</tbody>
			</table>
<li>Create a GeoEvent Output. We suggest one of three options:</li>
<ul>
				<li>Output to a Stream Service.</li>
				<li>Output to a Feature Service.</li>
				<li>Output to a Spatiotemporal Big Data Store.</li>
			</ul>
<li>Create the GeoEvent Service. If you want to consume the entire feed without any analysis, connect the input to the output. We will review using GeoEvent filters and processors to analyze this information in the next section.</li>
		</ol>