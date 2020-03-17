We are XR Youth Cambridge, and we rise to defend those already dying from the climate crisis. It isn’t about our grandchildren, it’s about you, us, and those who aren’t fortunate enough to be able to fight for their rights. The emergency isn’t coming, it’s already here.

We share a close relationship with XR and XR Cambridge, but are a separate organisation with a focus on the link between climate justice and social justice. Our sense of urgency to change things is strong, and we set our mission on what is necessary.

XR Youth Cambridge welcomes anyone between the ages of 18 and 30 years. If you:
* Are under 18 - XR Next Generation is for you
* Work or study at any university - XR Universities would love to have you
* Are over 30 years - the main XR branch is for you

You can be part of several of these groups simultaneously.

## Events
Details of all our meetings, trainings, talks and protests are on the [main XR Cambridge events page](/events). You’re welcome at any of them!

## Meetings
Newcomers are welcome to join us! We’ll give you an introduction to XR Youth, show you how to get involved, and make you
aware of any upcoming protests. Vegan snacks are provided.
* Open meetings: every Sunday 1 - 3 PM.
* General meetings: one Sunday each month 12 - 3 PM. These are meetings where all the youth groups (XR Next Generation,
XR Universities, and XR Youth) come together

You can see the exact details for these [on the events page](/events).

## Social media and contact
We’re pretty active on social media. Follow us for news, events, and public calling out of climate criminals. You can
also contact us through all of the below, whether it’s a question or a whistleblowing tip-off.
* Website: xrcambridge.org/youth
* Email: [xryouthcambridge@protonmail.com](mailto:xryouthcambridge@protonmail.com)
* Facebook: <a href="https://facebook.com/xryouthcambridge" target="_blank">facebook.com/xryouthcambridge</a>
* Twitter: <a href="https://twitter.com/xryouthcambs" target="_blank">twitter.com/xryouthcambs</a>
* Instagram: <a href="https://instagram.com/xryouthcambridge" target="_blank">instagram.com/xryouthcambridge</a>

## Working groups
XR Youth is a decentralised organisation - we have no leader, so the power to decide and do things is spread throughout everyone via working groups. Anything that’s needed or wanted can be planned and achieved via a working group, and everyone is free to join them or start new ones! Currently, we have:

<div class="feature__wrapper gridMaker">
	{% for item in site.data.wg_youth %}

	<div class="gridMaker__item gridMaker__item--{{ item.color }}">
		{% if item.name %}
		<div class="gridMaker__header">
			<span class="gridMaker__tab">{{ item.name }}</span>
		</div>
		{% endif %} {% if item.icon %}
		<div class="gridMaker__hero">
			<div class="gridMaker__icon-container">
				<i class="gridMaker__icon fa fa-{{ item.icon }}"></i>
			</div>
		</div>
		{% endif %} {% if item.description %}
		<div class="gridMaker__body">
			{{ item.description | markdownify }}
		</div>
		{% endif %} {% if item.email %}
		<div class="gridMaker__footer">
			<a
				class="gridMaker__button gridMaker__button--small"
				href="mailto:{{ item.email }}?subject=Contact%20from%20xrcambridge.org"
				target="_blank"
			>
				<i class="fa fa-envelope"></i> {{ item.email }}
			</a>
		</div>
		{% endif %}
	</div>

	{% endfor %}
</div>

Let us know if you’d like to be part of any of these or propose a new one.

## Rebel for Justice
Rebel for Justice is an ongoing, youth-led campaign which focuses on the responsibility of local institutions to act now on the climate crisis, and the fundamental connection between climate justice and social justice. In February 2020, XR Cambridge, supported by rebels from across the country, staged a week-long roadblock on a major Cambridge intersection, and carried out targeted non-violent direct action which caught the attention of the international press.

<a href="/rebel-for-justice" class="gridMaker__button bigHeader_button red" rel="noopener">
	Find out more
</a>