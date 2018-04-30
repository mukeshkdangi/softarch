<!DOCTYPE html>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html lang="en">
<head>

<link rel="stylesheet" type="text/css"
	href="webjars/bootstrap/3.3.7/css/bootstrap.min.css" />

<!--
	<spring:url value="/css/main.css" var="springCss" />
	<link href="${springCss}" rel="stylesheet" />
	 -->
<c:url value="/css/main.css" var="jstlCss" />
<link href="${jstlCss}" rel="stylesheet" />

</head>
<body>

	<table border="1">
		<tr>
			<th>
				<div id="box1" class="box">
					<div class="box-top">
						<h2>Software Architecture Level 1 </h2>
					</div>
				</div>
			</th>
		</tr>
		<tr>
			<td>
				<div class="box-middle">
					<form method="post" action="getVisDetails"
						modelAttribute="trainingRecord">
						Dependency File : <input type="text" name="dependency_file" />
						Trainer Name: <input type="text" name="cluster_dep_file">

						<td>
						<tr>
	</table>
	<div>
		<input
			style="margin-left: 700px; width: 100px; font-size: initial; font-family: initial; background-color: lavender; font-weight: bold;"
			type="submit" value="SUBMIT">
	</div>
	<input
		style="font-size: initial; font-family: initial; background-color: lavender; font-weight: bold; margin-left: 400px;"
		value="Get Level 2 Visualisation"
		onclick="window.location.href='getVisDetails'">
	</div>
	</form>
	</div>

	<div class="box-bottom"></div>
	</div>




	<!-- /.container -->

	<script type="text/javascript"
		src="webjars/bootstrap/3.3.7/js/bootstrap.min.js"></script>

</body>

</html>
